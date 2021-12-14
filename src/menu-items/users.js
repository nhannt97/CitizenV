// assets
import { IconList, IconPlus } from '@tabler/icons';

// constant

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'u-list',
            title: 'List',
            type: 'item',
            url: '/users/list',
            icon: IconList,
            target: true
        },
        {
            id: 'u-add',
            title: 'Add new',
            type: 'item',
            url: '/users/add-new',
            icon: IconPlus,
            target: true
        }
    ]
};

export default pages;
