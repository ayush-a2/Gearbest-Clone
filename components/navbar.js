function navbar() {
  return `<nav>
    <div class="about">
      <div class="ul_list">
        <li><p class="zero_padding">Support Center</p></li>
        <li><p class="zero_padding">Languages</p></li>
        <li><p class="zero_padding">Country Website</p></li>
      </div>
    </div>
    <div class="navbar">
      <div class="logo" id="logo_click"><img src="./Gadgetzone.png" alt=""></div>
      <div class="serch_box">
        <div id="search_form" class="yellow_background">
          <input type="text" name="search" id="serch_inbox" placeholder="Search Here"/>
          <div id="search_button" class="magnifier">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="search_content" id="search_content"></div>
        
      </div>
      <ul class="nav-links" id="nav_links">
        <li id="sign_in_btn">
          <i class="fa-solid fa-user yellow margin_right"></i>Sign-in
        </li>
        <li id="fav_btn">
          <i class="fa-solid fa-heart yellow margin_right"></i>Favorite
        </li>
        <li id="cart_btn">
          <i class="fa-solid fa-cart-shopping yellow margin_right"></i>Cart
        </li>
      </ul>
      <div class="humburgr" id="burger">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  </nav>`;
}

export { navbar };
