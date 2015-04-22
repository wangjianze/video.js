import Component from '../component.js';
import * as Lib from '../lib.js';

// Required children
import PlayToggle from './play-toggle.js';
import CurrentTimeDisplay from './time-controls/current-time-display.js';
import DurationDisplay from './time-controls/duration-display.js';
import TimeDivider from './time-controls/time-divider.js';
import RemainingTimeDisplay from './time-controls/remaining-time-display.js';
import LiveDisplay from './live-display.js';
import ProgressControl from './progress-control/progress-control.js';
import FullscreenToggle from './fullscreen-toggle.js';
import VolumeControl from './volume-control/volume-control.js';
import VolumeMenuButton from './volume-menu-button.js';
import MuteToggle from './mute-toggle.js';
import ChaptersButton from './text-track-controls/chapters-button.js';
import SubtitlesButton from './text-track-controls/subtitles-button.js';
import CaptionsButton from './text-track-controls/captions-button.js';
import PlaybackRateMenuButton from './playback-rate-menu/playback-rate-menu-button.js';

/**
 * Container of main controls
 * @param {Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 * @extends Component
 */
class ControlBar extends Component {
  createEl() {
    return Lib.createEl('div', {
      className: 'vjs-control-bar'
    });
  }
}

ControlBar.prototype.options_ = {
  loadEvent: 'play',
  children: {
    'playToggle': {},
    'currentTimeDisplay': {},
    'timeDivider': {},
    'durationDisplay': {},
    'remainingTimeDisplay': {},
    'liveDisplay': {},
    'progressControl': {},
    'fullscreenToggle': {},
    'volumeControl': {},
    'muteToggle': {},
    // 'volumeMenuButton': {},
    'playbackRateMenuButton': {},
    'subtitlesButton': {},
    'captionsButton': {},
    'chaptersButton': {}
  }
};

Component.registerComponent('ControlBar', ControlBar);
export default ControlBar;
