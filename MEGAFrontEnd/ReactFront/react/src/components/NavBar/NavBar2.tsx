import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Typography,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./NavBar.css";
const menuItems = [
    { title: "Ürünler", items: ["Laptop", "Telefon", "Aksesuarlar"] },
    { title: "Hizmetler", items: ["Garanti", "Teknik Servis", "Sigorta"] },
    { title: "Hakkımızda", items: ["Şirketimiz", "Ekibimiz", "İletişim"] },
];

const Navbar: React.FC = () => {
    // Menu state for desktop
    const [anchorEls, setAnchorEls] = useState<Record<string, HTMLElement | null>>({});
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    // Drawer state for mobile
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    // Theme and media query for responsive design
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Desktop menu handlers
    const handleClick = (event: React.MouseEvent<HTMLElement>, menuTitle: string) => {
        setAnchorEls({ ...anchorEls, [menuTitle]: event.currentTarget });
        setOpenMenu(menuTitle === openMenu ? null : menuTitle);
    };

    const handleClose = () => {
        setOpenMenu(null);
    };

    // Mobile drawer handlers
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleExpandClick = (title: string) => {
        if (expandedItems.includes(title)) {
            setExpandedItems(expandedItems.filter(item => item !== title));
        } else {
            setExpandedItems([...expandedItems, title]);
        }
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6">
                    <img src={"./images/logo.png"} id={"logo"} alt="logo" />
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer}
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer}
                        >
                            <Box sx={{ width: 250 }} role="presentation">
                                <List>
                                    {menuItems.map((menu) => (
                                        <React.Fragment key={menu.title}>
                                            <ListItem button onClick={() => handleExpandClick(menu.title)}>
                                                <ListItemText primary={menu.title} />
                                                {expandedItems.includes(menu.title) ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>

                                            <Collapse in={expandedItems.includes(menu.title)} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {menu.items.map((item) => (
                                                        <ListItem button key={item} sx={{ pl: 4 }}>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: "flex", gap: 2 }}>
                        {menuItems.map((menu) => (
                            <div key={menu.title}>
                                <Button
                                    color="inherit"
                                    onClick={(e) => handleClick(e, menu.title)}
                                >
                                    {menu.title}
                                </Button>

                                <Menu
                                    id={`menu-${menu.title}`}
                                    anchorEl={anchorEls[menu.title]}
                                    open={openMenu === menu.title}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    {menu.items.map((item) => (
                                        <MenuItem key={item} onClick={handleClose}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;