import { HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';
import { IconCalendarComponent } from '@components/IconCalendarComponent';

export const menuItemsArray = [
    {
        key: 'calendar',
        text: 'Календарь',
        icon: <IconCalendarComponent />,
    },
    {
        key: 'workouts',
        text: 'Тренировки',
        icon: <HeartFilled />,
    },
    {
        key: 'progress',
        text: 'Достижения',
        icon: <TrophyFilled />,
    },
    {
        key: 'profile',
        text: 'Профиль',
        icon: <IdcardOutlined />,
    },
];
