import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onFormSubmitClick);

//Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;

    // setTimeout(() => {
    //   if (shouldResolve) {
    //     res(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    //   } else {
    //     rej(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    //   }
    // }, delay);

    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

//Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

function onFormSubmitClick(evt) {
  evt.preventDefault();

  const { elements } = evt.target;

  const delayValue = Number(elements.delay.value);
  const stepValue = Number(elements.step.value);
  const amountValue = Number(elements.amount.value);

  // for (let index = 0; index < amountValue; index += 1) {
  //   createPromise(index + 1, delayValue + stepValue * index)
  //     .then(response => {
  //       response;
  //     })
  //     .catch(error => error);
  // }

  if(delayValue<0 || stepValue<0 || amountValue <0 ){
    Notify.init({
      width: '280px',
      position:'center-center',
      timeout: 5000,
    });
    Notify.info('Nice try, nice try...😀');
    return
  }

  Notify.init({
    width: '280px',
    position:'right-top',
    timeout: 3000,
  });

  for (let index = 0; index < amountValue; index += 1) {
    createPromise(index + 1, delayValue + stepValue * index)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
