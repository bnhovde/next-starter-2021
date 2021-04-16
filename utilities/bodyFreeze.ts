const freeze = (allowPortal?: boolean): void => {
  // Add aria-hidden to all other content (for screen-readers)
  const appWrapper = document.getElementById(`app`);
  const portalWrapper = document.getElementById(`app-portal`);
  if (appWrapper) {
    appWrapper.setAttribute('aria-hidden', 'true');
  }
  if (portalWrapper && !allowPortal) {
    portalWrapper.setAttribute('aria-hidden', 'true');
  }

  // Don't freeze if already frozen!
  if (document.body.classList.contains('body--frozen')) {
    return;
  }

  const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
  document.body.classList.add('body--frozen');
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.paddingRight = `${scrollBarGap}px`;
};

const unFreeze = (): void => {
  // Don't unFreeze if already unFrozen!
  if (!document.body.classList.contains('body--frozen')) {
    return;
  }

  document.body.classList.remove('body--frozen');
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.body.style.paddingRight = '';

  // Add aria-hidden to all other content (for screen-readers)
  const appWrapper = document.getElementById(`app`);
  const portalWrapper = document.getElementById(`app-portal`);
  if (appWrapper) {
    appWrapper.removeAttribute('aria-hidden');
  }
  if (portalWrapper) {
    portalWrapper.removeAttribute('aria-hidden');
  }
};

export { freeze, unFreeze };
