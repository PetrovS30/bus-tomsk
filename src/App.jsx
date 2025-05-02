import './App.css';
import PageHeader from './components/page/PageHeader';
import MainBlock from './components/block/main-block/MainBlock';
import Quiz1Block from './components/block/quiz1-block/Quiz1Block';
import Quiz2Block from './components/block/quiz2-block/Quiz2Block';
import ResultsBlock from './components/block/results-block/ResultsBlock';

function App() {
  return (
    <>
      <PageHeader/>
      <MainBlock/>
      <Quiz1Block/>
      <Quiz2Block/>
      <ResultsBlock/>
    </>
  )
}

export default App;
