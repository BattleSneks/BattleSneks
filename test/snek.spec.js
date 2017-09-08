import Background from '../client/components/Background.jsx';
import { Snek } from '../client/containers/Snek.jsx';

describe('Background unit tests: ', () => {
  describe('render tests', () => {
    it ('should render Background component', () => {
      const wrapper = shallow(<Background />);
      expect(wrapper.text()).to.eq('Hello from Background component. Props here: ');
    });
    it ('should pass down props', () => {
      const wrapper = shallow(<Background test='props here' />);
      expect(wrapper.text()).to.eq('Hello from Background component. Props here: props here');
    });
  });
});

describe('Snek unit tests: ', () => {
  describe('render tests', () => {
    it ('should render Snek component', () => {
      const wrapper = shallow(<Snek />);
      expect(wrapper.text()).to.eq('Hello from Snek component. This is snekReducer: Dispatch snek action');
    });
    it ('should pass down props', () => {
      const wrapper = shallow(<Snek test='props here' />);
      expect(wrapper.text()).to.eq('Hello from Snek component. props hereThis is snekReducer: Dispatch snek action')
    })
  });
});
