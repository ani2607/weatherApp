import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="flex justify-evenly gap-x-8 ">
      
      <div className="right">
          Made by <a href='https://www.instagram.com/_aniket22_/' className='text-purple-900 pl-1 text-xl'>Aniket Sharma</a>
      </div>

      <div className="left flex gap-x-2 justify-center items-center">

        <a href="https://github.com/ani2607">
        <AiFillGithub />
        </a>

        <a href="https://twitter.com/_aniket22_">
        <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/aniket-sharma-4638a5243/">
        <AiFillLinkedin />
        </a>

      </div>
      
    </div>
  )
}

export default Footer