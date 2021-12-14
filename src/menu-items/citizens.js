// assets
import { IconList, IconPlus } from '@tabler/icons';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'citizens',
    title: 'Citizens',
    type: 'group',
    children: [
        {
            id: 'ct-list',
            title: 'List',
            type: 'item',
            url: '/citizens/list',
            icon: IconList,
            target: true
        },
        {
            id: 'ct-add',
            title: 'Add new',
            type: 'item',
            url: '/citizens/add-new',
            icon: IconPlus,
            target: true
        }
    ]
};

export default pages;
