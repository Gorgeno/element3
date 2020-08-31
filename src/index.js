/* Automatically generated by './build/bin/build-entry.js' */
import Dialog from '../packages/dialog/index.js';
import Input from '../packages/input/index.js';
import Radio from '../packages/radio/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import RadioButton from '../packages/radio-button/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Switch from '../packages/switch/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Popover from '../packages/popover/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Breadcrumb from '../packages/breadcrumb/index.js';
import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
import Tag from '../packages/tag/index.js';
import Alert from '../packages/alert/index.js';
import Icon from '../packages/icon/index.js';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Progress from '../packages/progress/index.js';
import Message from '../packages/message/index.js';
import Badge from '../packages/badge/index.js';
import Card from '../packages/card/index.js';
import Rate from '../packages/rate/index.js';
import Carousel from '../packages/carousel/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import Container from '../packages/container/index.js';
import Header from '../packages/header/index.js';
import Aside from '../packages/aside/index.js';
import Main from '../packages/main/index.js';
import Footer from '../packages/footer/index.js';
import Link from '../packages/link/index.js';
import Divider from '../packages/divider/index.js';
import Backtop from '../packages/backtop/index.js';
import Avatar from '../packages/avatar/index.js';
import locale from 'element-ui/src/locale';
 import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Dialog,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Button,
  ButtonGroup,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Alert,
  Icon,
  Row,
  Col,
  Progress,
  Badge,
  Card,
  Rate,
  Carousel,
  Scrollbar,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Link,
  Divider,
  Backtop,
  Avatar,
   CollapseTransition
];

const install = function(app, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    app.component(component.name, component);
  });

  // app.use(InfiniteScroll);
  // app.use(Loading.directive);

  app.config.globalProperties.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // app.config.globalProperties.$loading = Loading.service;
  // app.config.globalProperties.$msgbox = MessageBox;
  // app.config.globalProperties.$alert = MessageBox.alert;
  // app.config.globalProperties.$confirm = MessageBox.confirm;
  // app.config.globalProperties.$prompt = MessageBox.prompt;
  // app.config.globalProperties.$notify = Notification;
  app.config.globalProperties.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.13.3',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  // Loading,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Button,
  ButtonGroup,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Alert,
  Icon,
  Row,
  Col,
  Progress,
  Message,
  Badge,
  Card,
  Rate,
  Carousel,
  Scrollbar,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Link,
  Divider,
  Backtop,
  Avatar
};
