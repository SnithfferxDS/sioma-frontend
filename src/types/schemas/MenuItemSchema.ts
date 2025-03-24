export interface MenuItem {
    id: number;
    name: string;
    url: string | null;
    icon: string | null;
    parent_id: number | null;
    position: number;
    children?: MenuItem[];
}

export type MenuItems = MenuItem[];