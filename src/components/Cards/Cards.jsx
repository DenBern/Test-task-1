import data from '../../data/mockData.ts'
import { Card } from '../Card/Card.jsx'
export const Cards = () => {

  const getRandom = (exclude) => {
    let random;
    do {
      random = Math.floor(Math.random() * (3 - 0) + 0);
    } while (random === exclude);
    return random;
  };

  let prevRandom = -1;

  const element = data.map(element => {
    const random = getRandom(prevRandom);
    console.log(random)
    prevRandom = random;
    return <Card
      key={element.id}
      img={element.img}
      title={element.title}
      date={element.date}
      random={random}
    />
  });

  return (
    <>
      {element}
    </>
  )
}