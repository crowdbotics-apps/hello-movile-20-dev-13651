import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen112918Navigator from '../features/CopyOfCopyOfBlankScreen112918/navigator';
import CopyOfBlankScreen112917Navigator from '../features/CopyOfBlankScreen112917/navigator';
import BlankScreen012799Navigator from '../features/BlankScreen012799/navigator';
import BlankScreen112798Navigator from '../features/BlankScreen112798/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen112918: { screen: CopyOfCopyOfBlankScreen112918Navigator },
CopyOfBlankScreen112917: { screen: CopyOfBlankScreen112917Navigator },
BlankScreen012799: { screen: BlankScreen012799Navigator },
BlankScreen112798: { screen: BlankScreen112798Navigator },

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
