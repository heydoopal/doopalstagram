async function addConfetti() {
  const jsConfetti = new JSConfetti();
  await jsConfetti.addConfetti({
    confettiColors: [
      '#E90074',
      '#FFC700',
      '#36BA98',
      '#3572EF',
      '#FF8F00',
      '#AF47D2',
    ],
    confettiRadius: 4,
    confettiNumber: 400,
  });
}

export function initializeButtonStates(
  starButton,
  followButton,
  followersCount
) {
  const starStatus = localStorage.getItem('starStatus');
  const followStatus = localStorage.getItem('followStatus');

  if (starStatus === 'active') {
    setStarActive(starButton);
  } else {
    setStarInactive(starButton);
  }

  if (followStatus === 'active') {
    setFollowActive(followButton, followersCount);
  } else {
    setFollowInactive(followButton, followersCount);
  }
}

export function handleStar(starButton) {
  if (starButton.classList.contains('active')) {
    setStarInactive(starButton);
    localStorage.setItem('starStatus', 'inactive');
  } else {
    setStarActive(starButton);
    localStorage.setItem('starStatus', 'active');
  }
}

export function handleFollow(followButton, followersCount) {
  if (followButton.classList.contains('active')) {
    setFollowInactive(followButton, followersCount);
    localStorage.setItem('followStatus', 'inactive');
  } else {
    setFollowActive(followButton, followersCount);
    localStorage.setItem('followStatus', 'active');
    addConfetti();
  }
}

function setStarActive(starButton) {
  starButton.classList.add('active');
  starButton.classList.add('fa-solid');
  starButton.classList.remove('fa-regular');
}

function setStarInactive(starButton) {
  starButton.classList.remove('active');
  starButton.classList.remove('fa-solid');
  starButton.classList.add('fa-regular');
}

function setFollowActive(followButton, followersCount) {
  followButton.classList.add('active');
  followButton.textContent = 'Following';
  followersCount.textContent = '81';
}

function setFollowInactive(followButton, followersCount) {
  followButton.classList.remove('active');
  followButton.textContent = 'Follow';
  followersCount.textContent = '80';
}
