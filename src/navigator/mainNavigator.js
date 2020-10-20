import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012799Navigator from '../features/BlankScreen012799/navigator';
import BlankScreen112798Navigator from '../features/BlankScreen112798/navigator';
import BlankScreen012795Navigator from '../features/BlankScreen012795/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012799: { screen: BlankScreen012799Navigator },
BlankScreen112798: { screen: BlankScreen112798Navigator },
BlankScreen012795: { screen: BlankScreen012795Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
