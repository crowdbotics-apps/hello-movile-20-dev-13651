import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen613114Navigator from '../features/BlankScreen613114/navigator';
import BlankScreen513113Navigator from '../features/BlankScreen513113/navigator';
import BlankScreen413026Navigator from '../features/BlankScreen413026/navigator';
import CopyOfBlankScreen013025Navigator from '../features/CopyOfBlankScreen013025/navigator';
import CopyOfBlankScreen013023Navigator from '../features/CopyOfBlankScreen013023/navigator';
import BlankScreen012919Navigator from '../features/BlankScreen012919/navigator';
import CopyOfCopyOfBlankScreen112918Navigator from '../features/CopyOfCopyOfBlankScreen112918/navigator';
import BlankScreen012799Navigator from '../features/BlankScreen012799/navigator';
import BlankScreen112798Navigator from '../features/BlankScreen112798/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen613114: { screen: BlankScreen613114Navigator },
BlankScreen513113: { screen: BlankScreen513113Navigator },
BlankScreen413026: { screen: BlankScreen413026Navigator },
CopyOfBlankScreen013025: { screen: CopyOfBlankScreen013025Navigator },
CopyOfBlankScreen013023: { screen: CopyOfBlankScreen013023Navigator },
BlankScreen012919: { screen: BlankScreen012919Navigator },
CopyOfCopyOfBlankScreen112918: { screen: CopyOfCopyOfBlankScreen112918Navigator },
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
