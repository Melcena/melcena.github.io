---
layout: post
title: "Статический анализ кода - Coverity, Klocwork"
language: russian
date: 2009-02-23 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2009/02/blog-post_23.html
categories:
- static code analysis
- russian
---
Все программисты ошибаются, даже самые продвинутые. Хорошим подспорьем в отлове ошибок, которые просмотрел программист, являются анализаторы кода.

Конечно, последней инстанцией будет непосредственно клиент, который непременно сообщит, что программа падает, но всегда хочется минимизировать такие случаи. Хорошо, когда процедура внедрения у заказчика вообще существует. Это позволяет без особых проблем сделать “критическое обновление” уже после релиза. Но в некоторых областях цена допущенных до клиента ошибок крайне высока. Например, для области встраиваемых систем любая минимальная утечка памяти будет фатальной, или, например, для разработчиков игр под игровые консоли будет трудновато “донести” до клиентов критические обновления, необходимость в которых выяснилась сразу после релиза и начала продаж (как это обычно бывает).

Перейдем от слов к делу и рассмотрим конкретный пример работы статического анализатора.

Вот пример "не очень хорошей программы":

{% codeblock lang:cpp %}
class A {
public:
 A() {
  char* __p = new char[10];
  __p = new char[10];

  char* a = (char *)0;
  *a = 0;

  char c[10];
  c[10] = 0;
 }
 ~A() {
  delete __p;

  char* a = new char[100];
  return;

  delete[] a;
}
private:
  char* __p;
};

int main() {
  A a;  
  return 0;
}
{% endcodeblock %}

Тут без микроскопа видно, что проблем полно:

* Утечка памяти в строке 05. Указатель `__p` явно имеет неправильное объявление в виде лишнего `char*`, которое перекрывает декларацию этого указателя в классе в строке 23. Оператор `delete` в строке 15 скорее всего закончится аварийно, так как значение `__p` для него будут неопределенно. 

* Строка 06 присваивает указателю `__p` адрес вновь распределенной памяти, тем самым затирая старое значение, присвоенное в строке 05, которое будет потеряно. 

* Строки 08 и 09 — это обращение по нулевому указателю, приводящее к нарушению защиты памяти. 

* Строки 12 и 12 — это типичное переполнение буфера (buffer overrun) 

* Память под указателем в строке 17 никогда не будет освобождена. Это утечка памяти.

Достаточно для начала. Не спорю, пример очень вычурный, но ошибки то весьма типичные, а когда они перемешаны с “правильным” кодом, их обнаружение становится серьезной проблемой. 

Теперь возьмем "микроскоп".

Посмотрим, что сможет сделать для нас Visual Studio. Начиная с версии 2005 у компилятора `cl.exe` появился ключ `/analyze`, который включает дополнительный анализ и вывод предупреждений о потенциальных проблемах. К сожалению, этот ключ есть только в версии студии Team (в Professional его нет). 

Компилируем в Visual Studio 2008 Team:

    cl /W3 /O2 /analyze /EHsc bad.cpp

Вот, что дает анализ:

    c:\sandbox\analyze\bad.cpp(12) : warning C6201: Index '10' is out of valid index range '0' to '9' for possibly stack allocated buffer 'c'

    c:\sandbox\analyze\bad.cpp(5) : warning C6211: Leaking memory '__p' due to an exception. Consider using a local catch block to clean up memory: Lines: 5, 6

    c:\sandbox\analyze\bad.cpp(9) : warning C6011: Dereferencing NULL pointer 'a': Lines: 5, 6, 8,9

    c:\sandbox\analyze\bad.cpp(12) : warning C6386: Buffer overrun: accessing 'c', the writable size is '10' bytes, but '11' bytes might be written: Lines: 5, 6, 8, 9, 11, 12`

Не так много, как хотелось бы, но хоть что-то. Переполнение буфера в строке 12 обнаружено. Запись по нулевому указателю в строке 09 тоже найдена. Давайте разберемся с сообщением об утечке памяти. Нам сообщается, что возможна утечка, если в строке 06 произойдет исключение (`std::bad_alloc`, например), тогда память, распределенная в строке 05 будет потеряна. Это, конечно, проблема, но все-таки суть ошибки передана неверно. Как мне показалось, анализатор в `cl.exe` работает последовательно, то есть он следует ходу компиляции, отсюда и “последовательный” характер смысла выведенных предупреждений. 

Мы в компании для статического анализа используем [Coverity Prevent for C/C++][]. Есть еще похожий продукт — [Klocwork][]. Эти два продукта делают примерно одну и ту же работу примерно с одинаковым результатом. Мы выбрали первый из-за более подходящей нам ценовой политики и более простого встраивания в систему сборки. 

Суть анализа, проводимого данными продуктами, это подобие псевдо-компиляции, когда строится синтаксическое дерево разбора и на основе его проводится анализ всех возможных ветвлений программы. Проходя все ветки, анализатор и проводит свои многочисленные проверки. Прикол в том, что анализ может найти проблему в таком закоулке кода, который может выполняется то раз в год (и раз в год программа падает), и может вы сами никогда не видели, как этот кусок программы работает. Анализ на уровне синтаксиса языка позволяет находить парные проблемы, которые могут быть расположены в разных частях исходного текста (например, поиск несоответствий в конструкторе и деструкторе). Также понимание синтаксиса дает возможность анализировать вложенные вызовы, когда, например, неверный указатель "проявляет" себя только двух или тремя уровнями выше. 

[Coverity Prevent for C/C++]: http://www.coverity.com/html/prevent-for-c-c++.html
[Klocwork]: http://www.klocwork.com/

Программы-анализаторы типа `lint` (или тот же ключ `/analyze`), которые просто ищут шаблоны "плохого" кода на уровне лексем, обычно выдаются миллиарды предупреждений, из которых только единицы ценны. При таком подходе разработчику быстро надоедает заниматься выуживанием “жемчужин” из общего потока мусора, и он перестает это делать. Анализаторы же в Coverity и Klocwork выдаются крайне точные сообщения, и процент ложных срабатываний крайне мал (по крайне мере на моем опыте). Также, в каждом из этих продуктов можно самостоятельно настраивать анализатор, фокусируя его на специфичных конкретно для вас потенциальных проблемах, отключая ненужные проверки для уменьшения “шума”. 

Идея, лежащая в этих продуктах, это дать не просто нечто, генерирующее тонны текстовых файлов, в которых надо копаться вручную. Тут дается целая среда для автоматизации анализа: групповая работа, система интеграции с контролем версий, позволяющая отдельно проверять каждый внесенный кусок кода и моментально локализовывать время, место и автора “проблем”, система рецензирования когда по исправлению ошибок, общая база данных по ошибкам, которая исключает повторный анализ уже исправленных ошибок, так как положение ошибки характеризуется не просто именем файла и номером строки, на контекстом, и поэтому даже когда ошибка “переехала” в другое место, то он не будет заявлена как новая. Обычно время псевдо-компиляции равно времени вашей обычной сборки, а время самого анализа может занимать в среднем в 3-4 раза дольше. Анализатор прекрасно может использовать многоядерные системы для радикального ускорения процесса. Например, мы с интегрировали статический анализ с системой автоматических “ночных” сборок. 

Естественно, никакой анализатор — это не панацея, и все 100% ошибок он не найдет, но изрядную долю выловит, позволив вам потратить освободившееся время на внесение новых ошибок. 

Кстати, обе эти конторы всегда организуют бесплатный тест-драйв. Можно попробовать, чего такого интересного сможет найти их анализатор в конкретно вашем коде. Честно могу сказать, это производит впечатление даже на самых заядлых зануд и скептиков среди разработчиков и менеджеров. Когда на ваших глазах открывается такое в коде, что волосы дыбом встают, то к этому невозможно остаться равнодушным. Например, мы сопровождаем большое количество так называемого legacy кода, и тут, конечно, статический анализ проявляет себя во всей красе, хотя и новом, объектно-ориентированном и unit-оттестированном коде тоже бывают ошибки. Это человеческий фактор и от него никуда не деться.

Так вот, анализатор Coverity нашел все проблемы в данной маленькой, но очень плохой программе, включая несоответствие распределения памяти в конструкторе, и ее “неправильном” освобождении в деструкторе. 
У нас в отделе есть даже специальная копилка, если в твоем коде статический анализатор находит серьезную проблему, типа утечки или какой-нибудь “неприятности” с указателями или памятью, то принято внести в кассу посильную сумму, чтобы ее можно было потратить коллективно при очередном походе в паб. А пабе как-то особенно продуктивно обсуждаются темы типа кто, куда и какую ошибку внес.

Сейчас мы рассмотрели статический анализ кода. Также существует также динамический анализ, когда уже в процессе работы программы специальными средствами производится автоматизированный поиск ошибок. Лично я постоянно использую совершенно волшебный динамический анализатор [Valgrind][]. Valgrind не так удобен, как мне кажется, для полностью автоматизированной проверки и больше подходит, когда надо поймать какой-то конкретный глюк, например, явную утечку памяти, обнаруженную функциональными тестами, но не выявленную статическим анализом. 

[Valgrind]: http://valgrind.org/

Отдельной строкой хочу отметить Borland/CodeGear Codeguard, входящий в состав одноименной студии. Данная библиотека может опционально встраиваться борландовым компилятором в код, шпигуя его сотнями проверок на различные утечки, неправильную работу с указателями и прочими неприятностями. Код при этом замедляется в разы и порой делает невозможным отладку вычислительно тяжелых алгоритмов, но вот находимые с помощью Codeguard’а ошибки порой дорогого стоят.

Анализаторы кода (статические или динамические) являются крайне необходимым инструментом. А конкретно, статические, позволяют автоматизировано находится “плохие” места кода, которые проглядели программисты.
