// assets
import { IconList, IconPlus } from '@tabler/icons';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'provinces',
    title: 'Provinces',
    type: 'group',
    children: [
        {
            id: 'pr-list',
            title: 'List',
            type: 'item',
            url: '/provinces/list',
            icon: IconList,
            target: true
        }
    ]
};

export default pages;
