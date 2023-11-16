import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Discover and Share Best Prompts at
      <br />
      <span className="orange_gradient text-center">AI Prompt Hub</span>
      </h1>
      <p className="desc text-center">
      AI Prompt Hub is an open-source project that provides a platform for users from around the world to share and discover AI prompts. Whether you're a developer, a creative writer, or simply curious about AI, this platform allows you to contribute and explore a wide range of prompts. Join the community and unleash your creativity!
      </p>
      
      <Feed />
    </section>
  )
}

export default Home