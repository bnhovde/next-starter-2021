import React, { useContext } from 'react';

import UiContext from 'context/UiContext';

import Dialog from 'components/Dialog';

const GenericDrawer: React.FC = () => {
  const { closeDialog } = useContext(UiContext);

  return (
    <>
      <Dialog isOpen={true} title="Generic dialog" confirmText="Okay" onClose={() => closeDialog()}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum vero ea quis dolorum sed
          voluptate, eaque soluta tempore nesciunt! Aliquid corrupti, odio fugiat odit rerum minima
          asperiores cupiditate modi voluptates?
        </p>
      </Dialog>
    </>
  );
};

export default GenericDrawer;
