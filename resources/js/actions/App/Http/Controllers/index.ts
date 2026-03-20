import ComplaintController from './ComplaintController'
import MapController from './MapController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    ComplaintController: Object.assign(ComplaintController, ComplaintController),
MapController: Object.assign(MapController, MapController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers