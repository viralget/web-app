import { Drawer, ANCHOR } from "baseui/drawer";

export default ({children}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => window.location.reload(true)}
      anchor={ANCHOR.right}
        overrides={{
            DrawerBody: {
          style: ({ $theme }) => ({
            marginRight:0,
            marginLeft:0,
            marginTop:0,
            marginBottom:0,
            textColor: '#fff'

          }),
        },
        Close: {
            style: ({ $theme }) => ({
               color: '#fff ',
            })
          },
          DrawerContainer: {
            style: ({ $theme }) => ({
              width: '35rem',
              // zIndex:10
  
            }),
          },
      
      }}
    >
      {children}
    </Drawer>
  );
}