---
layout: post
title: "Ошибка в обработке деструктора временного объекта в компиляторе Sun C++ 5.8"
language: russian
date: 2011-06-07 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2011/06/sun-c-58.html
categories: 
- bug
- compiler
- russian
---
Рассмотрим код:

{% codeblock lang:cpp %}
#include <iostream>
int ct = 1;
struct G {
  ~G() { ct--; }
};
int main() {
  (G());  // (1)
  std::cout << ct << std::endl;
  return 0;
}
{% endcodeblock %}

Как вы думаете - что напечатает данная программа?

Весь вопрос в том, когда будет вызван деструктор временного объекта, созданного в строке `(1)`: сразу после знака `;` в этой же строке или в конце блока на символе `}`?

Если первое, то программа выведет "0", если второе, то "1".

Я проверил на 6 разных компиляторах на разных платформах - везде печатается "0", что соответствует стандарту.

Но на отдельно выделенной версии Sun C++ 5.8 2005/10/13 данная программа печатает "1"!

Мы провели с коллегой интересные пару часов, пытаясь в огромной программe локализовать этот коварный глюк.
