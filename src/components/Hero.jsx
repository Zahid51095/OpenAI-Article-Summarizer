import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flec-col'>
       <nav className='flex justify-between items-center flex-col'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type='button' onClick={() => window.open('https://github.com/Zahid51095/OpenAI-Article-Summarizer')} className='black_btn'>
          GitHub
        </button>
       </nav>
    </header>
  )
}

export default Hero