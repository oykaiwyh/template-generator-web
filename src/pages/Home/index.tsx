import HomeIconInfo from './components/iconInfo';
import HomeLists from './components/lists';
import HomeSearch from './components/search';

const Home = () => {
  console.log('---------Home----------');

  return (
    <>
      <HomeSearch />
      <HomeIconInfo />
      <HomeLists />
    </>
  );
};

export default Home;
