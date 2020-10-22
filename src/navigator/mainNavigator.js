import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen013025Navigator from '../features/CopyOfBlankScreen013025/navigator';
import CopyOfCopyOfBlankScreen013024Navigator from '../features/CopyOfCopyOfBlankScreen013024/navigator';
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
CopyOfBlankScreen013025: { screen: CopyOfBlankScreen013025Navigator },
CopyOfCopyOfBlankScreen013024: { screen: CopyOfCopyOfBlankScreen013024Navigator },
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
