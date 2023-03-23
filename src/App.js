import './App.css';
import Header from './Header';
import Hero from './Hero';
import Content from './Content';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <div className="movies">
        <Movie
          image="https://as01.epimg.net/meristation/imagenes/2021/12/16/reportajes/1639644481_655591_1640209353_noticia_normal.jpg"
          title="Spider-Man: No Way Home"
        />
        <Movie
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71frebDVeKL._SL1500_.jpg"
          title="The Matrix Resurrections"
        />
        <Movie
          image="https://i.blogs.es/2af678/dune-cartel/1366_2000.jpeg"
          title="Dune"
        />
        <Movie
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62f987e1-c5f0-41cb-8721-da6df1b4a1d6/dfocn64-5f15db75-5e02-4a21-a9ea-346dd4f98406.png/v1/fill/w_1280,h_1280,q_80,strp/black_widow__fearless_and_unstoppable_by_r3drum81_dfocn64-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzYyZjk4N2UxLWM1ZjAtNDFjYi04NzIxLWRhNmRmMWI0YTFkNlwvZGZvY242NC01ZjE1ZGI3NS01ZTAyLTRhMjEtYTllYS0zNDZkZDRmOTg0MDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IuP-vconx6xNBecueq2uhiVEm52AkLq_7dg6lpQ2Tak"
          title="Black Widow"
        />
      </div>
    </div>
  );
}

export default App;
