import _ from 'lodash';
import { Fragment } from 'react';

import Hooks from '@/hooks';

import 'css/pages/home.css';

const ShowEventsModal = ({ title, events, handleClose }) => {
    const i18n = Hooks.useI18n();
	return (
		<Fragment>
			<div className="mt-10 mx-12 font-bold text-xl">{i18n(title)}</div>
			<div className="events-list mt-4 px-2">
				{events.map((event) => (
					<div className="event-list-item">
						<div className="event-name">{event.name}</div>
						<div className="event-description">{event.description}</div>
					</div>
				))}
			</div>
            <div className="flex flex-row mt-10 mb-10 mx-12">
                <button className="ml-auto mr-auto modal-button" onClick={handleClose}>
                    {i18n('Close')}
                </button>
            </div>
		</Fragment>
	);
};
export default ShowEventsModal;
