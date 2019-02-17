# День 6
- склонить проект https://github.com/GonikDaniel/QAA-Test-Task
- перейти в папку с проектом и выполнить `npm i`
- выполнить `npm run e2e` и посмотреть на результат вывода
- открыть `app.component.html` и задать атрибут *automation-id* для первого input
- в `app.po.ts` дописать метод получения/заполнения этого инпута
- в `app.e2e.ts` дописать тест в котором будет проверяться заполнение этого инпута 

### Links
- [Как заполнить input](https://www.protractortest.org/#/api?view=webdriver.WebElement.prototype.sendKeys)
- [Как получить значение input](https://github.com/angular/protractor/blob/master/docs/faq.md#the-result-of-gettext-from-an-input-element-is-always-empty)
- [Protractor](https://www.protractortest.org/#/)
- [Protractor API](https://www.protractortest.org/#/api)
- [Protractor base tutorial](https://www.protractortest.org/#/tutorial)
- [Protractor with TypScript](https://github.com/angular/protractor/tree/5.4.1/exampleTypescript)
- [Полезные ссылки из репозитория GonikDaniel](https://github.com/GonikDaniel/QAA-Test-Task#%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8)

## Домашнее задание
Протестировать всю форму из `app.component.html`.

### Как запустить написанный код?

В терминале ввести команды

```bash
git clone https://github.com/GonikDaniel/QAA-Test-Task
cd QAA-Test-Task
npm install
npm run e2e
```