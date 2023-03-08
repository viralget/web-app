import { Drawer, ANCHOR } from "baseui/drawer";

export default ({children}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
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
          }
      
      }}
    >
      {children}
    </Drawer>
  );
}