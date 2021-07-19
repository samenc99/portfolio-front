import {Content, DivImg, Img, Name, P, Profession} from "./styled";
import linkedin from '../../../../assets/Contacts/linkedin.png'
import telegram from '../../../../assets/Contacts/telegram.png'
import github  from '../../../../assets/Contacts/github.png'
import whatsapp from '../../../../assets/Contacts/wpp.png'

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
        <a href={'https://web.whatsapp.com/send?phone=48988110866'} target={'_blank'}>
          <Img src={whatsapp} alt={'whatsapp'} />
        </a>
      </DivImg>
    </Content>
  )
}