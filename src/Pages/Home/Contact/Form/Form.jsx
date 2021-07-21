import {Button, Content, Email, Name, Text, Modal} from "./styled";
import useForm from "../../../../Hooks/useForm";
import validateEmail from "../../../../services/validateEmail";
import {api} from "../../../../services/api";
import {useState} from 'react'
import {Loading} from '../../../../components/Loading/Loading'

const initialForm = {
  name:'', email:'', text:''
}

export const Form = ()=>{
  const [form, setForm, clearForm] = useForm(initialForm)
  const [send, setSend] = useState(false)

  const onSubmit = async(e)=>{
    e.preventDefault()
    setSend(true)
    try{
      if(!validateEmail(form.email)){
        setSend(false)
        alert('Por favor, digite um e-mail válido')
      }
      else{
        const res = await api.post('/email',form)
        setSend(false)
        alert(res.data.message)
      }
    }catch (err){
      setSend(false)
      alert('Estamos com problemas internos, por favor nos contate através de uma das formas ao lado' +
        'do formulário.')
    }
    clearForm()
  }

  return(
    <Content onSubmit={onSubmit}>
      <Name
        placeholder={'Nome...'}
        name={'name'}
        value={form.name}
        onChange={setForm}
        required
      />
      <Email
        placeholder={'E-mail...'}
        name={'email'}
        type={'email'}
        value={form.email}
        onChange={setForm}
        required
      />
      <Text
        placeholder={'Digite a sua mensagem...'}
        name={'text'}
        value={form.text}
        onChange={setForm}
        required
      />
      <Button>Enviar</Button>
      {send &&
        <Modal>
          <Loading/>
        </Modal>
      }
    </Content>
  )
}