import { styles } from './Home.styles';
import * as stylex from '@stylexjs/stylex';

export const Home = () => {
  return (
    <div {...stylex.props(styles.home)}>
      <h1>Home</h1>
    </div>
  )
}