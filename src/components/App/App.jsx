import React, {useRef, useEffect} from 'react';
import data from '../../data/mockData.ts';
import { Cards } from '../Cards/Cards';

function App() {
  const sliderRef = useRef(null);
  let currentSlide = 0;
  let sliderPosition = 0;
  const amountSlide = data.length - 1;
  const firstSlide = 0;

  const toggleDisabled = () => {
    const btnNext = document.querySelector('.next-slide');
    const btnPrev = document.querySelector('.prev-slide');

    if (currentSlide === amountSlide) btnNext.setAttribute('disabled', '');
    if (currentSlide > firstSlide) btnPrev.removeAttribute('disabled', '');

    if (currentSlide === firstSlide) btnPrev.setAttribute('disabled', '');
    if (currentSlide < amountSlide) btnNext.removeAttribute('disabled', '');
  }

  const nextSlide = () => {
    if (currentSlide === amountSlide) return;
    currentSlide++;
    toggleDisabled();
    const cards = document.querySelectorAll('.card');
    const cardsBlock = document.querySelector('.cards');
    const currentSlideWidth = cards[currentSlide - 1].clientWidth;
    sliderPosition -= currentSlideWidth;
    cardsBlock.style.transform = `translateX(${sliderPosition}px)`;
  };

  const prevSlide = () => {
    if (currentSlide === firstSlide) return;
    currentSlide--;
    toggleDisabled();
    const cards = document.querySelectorAll('.card');
    const cardsBlock = document.querySelector('.cards');
    const currentSlideWidth = cards[currentSlide].clientWidth;
    sliderPosition += currentSlideWidth;
    cardsBlock.style.transform = `translateX(${sliderPosition}px)`;
  };

  const scroolSlider = (event) => {
    console.log(sliderPosition)
    const delay = event.deltaY;
    const multiplier = 0.6;
    sliderPosition -= delay * multiplier;
    if (sliderPosition > firstSlide) sliderPosition = 0;
    if (sliderPosition < -1720) sliderPosition = -1720;
    sliderRef.current.style.transform = `translateX(${sliderPosition}px)`;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('wheel', scroolSlider)
    return () => {
      slider.removeEventListener('wheel', scroolSlider);
    };
  }, [scroolSlider]);

  return (
    <div className="app">
    <section className="materials">
      <div className="materials__text wrapper">
        <h1 className="title">Полезные материалы</h1>
        <p className="description">
          Собрали для вас полезные исследования схемы
          кормления и другие материалы, которые пригодятся
          для лучших результатов на вашем хозяйстве
        </p>
      </div>
      <div className="slider">
        <div className="cards" ref={sliderRef}>
          <Cards/>
        </div>
      </div>
      <div className="buttons wrapper">
        <button
          className="prev-slide"
          onClick={prevSlide}
        >
          <svg width="173" height="23" viewBox="0 0 173 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="10" width="172" height="2.99998" fill="#C9D0E1"/>
            <path d="M12 0V0C12 6.07513 7.07513 11 0.999998 11L-1.33918e-06 11" stroke="#C9D0E1" stroke-width="3"/>
            <path d="M12 23V23C12 16.9249 7.07513 12 1 12L6.11999e-07 12" stroke="#C9D0E1" stroke-width="3"/>
          </svg>
        </button>
        <button
          className="next-slide"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="173" height="23" viewBox="0 0 173 23" fill="none">
            <rect width="172" height="2.99998" transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 10)" fill="#C9D0E1"/>
            <path d="M161 0V0C161 6.07513 165.925 11 172 11L173 11" stroke="#C9D0E1" stroke-width="3"/>
            <path d="M161 23V23C161 16.9249 165.925 12 172 12L173 12" stroke="#C9D0E1" stroke-width="3"/>
          </svg>
        </button>
      </div>
    </section>
    </div>
  );
}

export default App;
