function getLoggedInCookie(): boolean {
  try {
    const match = document.cookie
      .split(';')
      .some((item) => item.trim().startsWith('@@appname-logged-in='));

    return match;
  } catch {
    return false;
  }
}

function getExpiry(): string {
  try {
    const match = document.cookie
      .split(';')
      .find((item) => item.trim().startsWith('@@appname-logged-in='));

    return match ? match.split('=')[1] : '';
  } catch {
    return '';
  }
}

function getHasSeenAgreement(): string {
  try {
    const match = document.cookie
      .split(';')
      .find((item) => item.trim().startsWith('@@appname-seen-agreeement='));

    return match ? match.split('=')[1] : '';
  } catch {
    return '';
  }
}

export { getLoggedInCookie, getExpiry, getHasSeenAgreement };
