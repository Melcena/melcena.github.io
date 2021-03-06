---
layout: post
title: 'Разница между "T()" и "T"'
language: russian
date: 2009-02-21 01:00
comments: true
blogspot: http://easy-coding.blogspot.com/2009/02/t-t.html
categories:
- cplusplus
- russian
---
Как совершенно справедливо было замечено в комментариях в [посте про разницу между "new T()" и "new T"][Разница между "new T()" и "new T"] — при объявлении автоматической переменной, а не динамической через new, нельзя использовать скобки, если подразумевается вызвать конструктор по умолчанию. То есть нельзя писать:

{% codeblock lang:cpp %}
T a();
{% endcodeblock %}

а надо писать:

{% codeblock lang:cpp %}
T a;
{% endcodeblock %}

так как в первом случае такая запись будет означать декларацию функции a, которая возвращает тип `T`, а далеко не декларацию переменной класса `T` с вызовом конструктора по умолчанию.

Не спорю, это очевидно для профессионалов. Для новичков же порой подобная "неочевидная" разница вызывает затруднения, поэтому приведу простейший пример, которые расставит все на свои места.

{% codeblock lang:cpp %}
#include <iostream>
class T {
public:
  T() { std::cout << "constructor T()"; }
};

int main() {
  std::cout << "T a: ";
  // Это синтаксис создания экземпляра класса T с вызовом
  // конструктора по умолчанию.
  T a;
  std::cout << std::endl;

  std::cout << "T b(): ";
  // А вот это декларация функции "b" без аргументов,
  // которая возвращает тип T.
  T b();
  std::cout << std::endl;
  return 0;
}
{% endcodeblock %}

Результат:

    T a: constructor T()
    T b():

Видно, что для `T b();` никакой конструктор не был вызван. Что в целом и ожидалось.

Использование круглых скобок может быть весьма [тонким вопросом в С++][Темные углы С++].

[Разница между "new T()" и "new T"]: /blog/russian/2009/02/20/difference-between-new-and-new-with-brackets/
[Темные углы С++]: /blog/russian/2009/02/09/dark-corners-of-cpp/
