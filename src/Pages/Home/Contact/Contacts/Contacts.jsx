import {Content, DivImg, Img, Name, P, Profession} from "./styled";
import linkedin from '../../../../assets/Contacts/linkedin.png'
import telegram from '../../../../assets/Contacts/telegram.png'
import github  from '../../../../assets/Contacts/github.png'
import whatsapp from '../../../../assets/Contacts/wpp.png'
import gmail from '../../../../assets/Contacts/gmail.png'

function detectar_mobile() {
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
  else {
    return false;
  }
}

export const Contacts = ()=>{

  return(
    <Content>
      <Name>Samuel Pires Mateus</Name>
      <Profession>Full Stack Developer</Profession>
      <P><strong>Telefone:</strong> (48)98811-0866</P>
      <P><strong>Email:</strong> mateus.enc@gmail.com</P>
      <DivImg>
        <a href={'https://www.linkedin.com/in/samuel-pires-mateus-a975b1203/'} target={'_blank'}>
          <Img src={linkedin} alt={'linkedin'}/>
        </a>
        <a href={'https://github.com/samenc99/'} target={'_blank'}>
          <Img src={github} alt={'github'}  />
        </a>
        <a href={'https://t.me/samuel_enc'} target={'_blank'}>
          <Img src={telegram} alt={'telegram'}/>
        </a>
        {detectar_mobile()? (
          <a href={'https://api.whatsapp.com/send?phone=5548988110866'} target={'_blank'}>
            <Img src={whatsapp} alt={'whatsapp'} />
          </a>
        ):(
          <a href={'https://web.whatsapp.com/send?phone=5548988110866'} target={'_blank'}>
            <Img src={whatsapp} alt={'whatsapp'} />
          </a>
        )}
        <a target={'_blank'} href={'mailto:mateus.enc@gmail.com?'}>
          <Img src={gmail} alt={'gmail'} />
        </a>
      </DivImg>
    </Content>
  )
}