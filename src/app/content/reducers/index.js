import {
  RECOMMENDATION_FOUND,
  REDUCE_RECOMMENDATION_IFRAME,
  EXTEND_RECOMMENDATION_IFRAME,
  DEACTIVATE,
  DISMISS_RECO,
  REPORT_RECO,
  OPEN_PREFERENCE_PANEL,
  CLOSE_PREFERENCE_PANEL,
  DEACTIVATED_WEBSITES,
  REACTIVATE_WEBSITE,
  INSTALLED_DETAILS,
  CRITERIA,
  SELECT_CRITERION,
  UNSELECT_CRITERION,
  EDITORS,
  EXCLUDE_EDITOR,
  INCLUDE_EDITOR
} from '../../constants/ActionTypes';

export default function (state = {}, action) {
  const { type } = action;

  switch (type) {
    case RECOMMENDATION_FOUND:
      const { recommendations } = action;
      return state.set('recommendations', recommendations).set('reduced', false);

    case REDUCE_RECOMMENDATION_IFRAME:
      return state.set('reduced', true);

    case EXTEND_RECOMMENDATION_IFRAME:
      return state.set('reduced', false);

    case DEACTIVATE:
    case DISMISS_RECO:
    case REPORT_RECO:
      return state.set('open', false);

    case OPEN_PREFERENCE_PANEL:
      const { panel } = action;
      return state.set('preferenceScreenPanel', panel);

    case CLOSE_PREFERENCE_PANEL:
      return state.set('preferenceScreenPanel', undefined);

    case DEACTIVATED_WEBSITES:
      const { deactivatedWebsites } = action;
      return state.set('deactivatedWebsites', deactivatedWebsites);

    case INSTALLED_DETAILS:
      const { onInstalledDetails } = action;
      return state.set('onInstalledDetails', onInstalledDetails);

    case REACTIVATE_WEBSITE:
      const { website } = action;
      return state.set('deactivatedWebsites', state.get('deactivatedWebsites').delete(website));

    case CRITERIA: {
      const { criteria } = action;
      return state.set('criteria', criteria);
    }

    case SELECT_CRITERION: {
      const { slug } = action;
      const criteria = state.get('criteria');

      return state.set('criteria', criteria.setIn([slug, 'isSelected'], true));
    }

    case UNSELECT_CRITERION: {
      const { slug } = action;
      const criteria = state.get('criteria');

      return state.set('criteria', criteria.setIn([slug, 'isSelected'], false));
    }

    case EDITORS: {
      const { editors } = action;
      return state.set('editors', editors);
    }

    case EXCLUDE_EDITOR: {
      const { id } = action;
      const editors = state.get('editors');

      return state.set('editors', editors.setIn([id.toString(), 'isExcluded'], true));
    }  

    case INCLUDE_EDITOR: {
      const { id } = action;
      const editors = state.get('editors');

      return state.set('editors', editors.setIn([id.toString(), 'isExcluded'], false));
    }

    default:
      return state;
  }
}