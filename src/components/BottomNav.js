const BottomNav = ({
  homeIcon,
  foodIcon,
  orderIcon,
  profileIcon,
  handleHomeClick,
  handleFoodClick,
  handleOrderClick,
  handleProfileClick,
}) => {
  return (
    <>
      <div className="bottomnav__cnt">
        <div onClick={handleHomeClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{homeIcon}</div>
          </button>
        </div>
        <div onClick={handleFoodClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{foodIcon}</div>
          </button>
        </div>

        <div onClick={handleOrderClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{orderIcon}</div>
          </button>
        </div>
        <div onClick={handleProfileClick} className="bottomnav__cnt-item">
          <button>
            <div className="bottomnav__icon">{profileIcon}</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
