import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  }
  return (
    <Container>
      <Title>
        Login
        <small>OIE</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque deleniti ullam.
        Tenetur vel voluptates iste magnam suscipit doloribus dolorum a harum? Tenetur fuga vel ad
        nam placeat inventore aspernatur?
      </Paragraph>
      <button onClick={handleClick} type="button">
        Login
      </button>
    </Container>
  );
}
