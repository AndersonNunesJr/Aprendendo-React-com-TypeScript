import  Button  from 'components/Button';
import { TitleButton } from './styles';


export function ButtonTitle(){
return (
<>

<TitleButton>

<Button text={'Get a demo'} />
<Button variant='secondary' text={'Get a demo'} />
</TitleButton>

</>

);

}