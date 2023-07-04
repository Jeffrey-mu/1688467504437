window.onload = () => {
  useSearch('ces' + location.origin);
  back_to_top()
  useMobileMenu()
  $('.playnow').click(function () {
    $('#ifr_diagnose').css({ 'height': '100vh', 'width': '100vw', 'position': 'fixed', 'top': '0', 'left': '0', 'display': 'block', 'z-index': '10001' })
    $('.gameButtons').css('display', 'block')
    $('body').css({ 'overflow': 'hidden' })
  })

  $('.gameButtons').click(function () {
    if ($(".gameMenu").css("display") == "none") {
      $(".gameMenu").css('display', 'block')
    } else {
      $(".gameMenu").css('display', 'none')
    }
  })
  $('.closegameMenu').click(function () {
    cliW = window.innerWidth
    if (cliW > 1200) {
      $('#ifr_diagnose').css({ "width": "800px", "height": '660px', "position": 'static' })
    } else if (cliW > 786 && cliW < 1200) {
      $('#ifr_diagnose').css({ "width": "100%", "height": '500px', "position": 'static' })
    } else {
      $('#ifr_diagnose').css({ "width": "100%", "height": '345px', "position": 'static' })
    }
    $('.gameButtons').css('display', 'none')
    $(".gameMenu").css('display', 'none')
    $('body').css({ 'overflow': 'auto' })
  })
}

function useMobileMenu() {
  let mobile_menu = document.querySelector('.mobile_menu');
  let icon_caidan = document.querySelector('.icon-caidan2')
  let close = document.querySelector('.close')
  mobile_menu.addEventListener('click', (e) => {
    if (e.target === mobile_menu) {
      changeMenu(false)
    }
  })
  icon_caidan.addEventListener('click', (e) => {
    changeMenu(true)
  })
  close.addEventListener('click', (e) => {
    changeMenu(false)
  })
  function changeMenu(state) {
    mobile_menu.style.width = state ? '100vw' : '0';
    document.body.style.overflow = state ? 'hidden' : 'auto';
  }
  return [changeMenu]
}

function back_to_top() {
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.classList.add('iconfont', 'icon-backtop')

  // 添加点击事件监听器
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 将按钮添加到页面中的 body 元素中
  document.body.appendChild(scrollToTopBtn);

  // 添加样式以将按钮放在右下角
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "80px";
  scrollToTopBtn.style.right = "40px";
  scrollToTopBtn.style.fontSize = "40px"
  scrollToTopBtn.style.color = "rgb(236, 152, 18)"
  scrollToTopBtn.style.borderRadius = '50%'
  scrollToTopBtn.style.background = "#ffffff"
  scrollToTopBtn.style.cursor = "pointer"
  // 监听窗口的滚动事件
  window.addEventListener("scroll", function () {
    // 如果滚动位置小于 200 像素，则隐藏回到顶部按钮，否则显示它
    if (window.scrollY < 200) {
      scrollToTopBtn.style.display = "none";
    } else {
      scrollToTopBtn.style.display = "block";
    }
  });
}


function useSearch(key) {
  const div = document.createElement('div');
  div.classList.add('modal');
  div.classList.add('max_width');
  div.id = 'search-modal';
  div.innerHTML = `
    <div class="modal-content">
      <div class="tools_s">
        <input type="text" placeholder="Search" id="search_input" />
        <button id="modal-search-btn">Search</button>
      </div>
      <div class="line"></div>
      <div class="search_result">

      </div>
    </div>
`;
  const body = document.querySelector('body')
  body.appendChild(div)
  // 获取搜索按钮和弹框元素
  const searchBtn = document.querySelector('.mob_search');
  const modal = document.getElementById('search-modal');
  const search_input = document.getElementById('search_input');
  const search_result = document.querySelector('.search_result');
  const style = document.createElement('style');
  style.innerHTML = `
  /* 遮罩层 */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    z-index: 9999;
    display: none;
  }

  #search-modal {
    overflow: hidden;
    width: 80%;
    height: 500px;
  }

  /* 弹框 */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px  rgb(236, 152, 18);
    z-index: 10000;
    display: none;
  }

  .modal-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .modal-content .tools_s {
    display: flex;
  }

  .modal-content .search_result {
    margin-top: 20px;
    height: calc(500px - 60px);
    overflow: auto;
    display: flex;
    color: #fff;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .modal-content .search_result a {
    width: 30%;
    min-height: 200px;
    border-radius: 10px;
    color: #111;
    height: auto;
  }

  .modal-content .search_result a img {
    width: 100%;
    border-radius: 10px;
    height: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  @media (max-width: 750px) {
    .modal-content .search_result a {
      width: 100%;
      height: auto;
      border-radius: 10px;
      color: #111;
    }

    #search-modal {
      height: 50vh;

    }

    .modal-content .search_result {
      height: calc(50vh - 60px);
    }
  }

  .modal-content div {
    width: 100%;
  }

  .modal input[type="text"] {
    background-color: transparent;
    width: 100%;
    padding: 8px;
    margin-right: 10px;
    border: none;
    color: #111;
    border-bottom: 1px solid  rgb(236, 152, 18);
  }

  .modal input[type="text"]:focus {
    outline: none;
  }

  .modal button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color:  rgb(236, 152, 18);
    color: #fff;
  }

  /* 显示弹框时添加遮罩层 */
  .modal.show {
    display: block;
  }

  .overlay.show {
    display: block;
  }`
  searchBtn.appendChild(style)
  // 点击搜索按钮显示弹框
  searchBtn.addEventListener('click', show_search);
  function show_search() {
    modal.classList.add('show');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'show');
    document.body.appendChild(overlay);
    // 点击遮罩层或弹框外部区域隐藏弹框
    overlay.addEventListener('click', (event) => {
      if (event.target === modal || event.target.closest('.modal-content')) {
        return;
      }

      modal.classList.remove('show');
      if (overlay) {
        overlay.classList.remove('show');
        document.body.removeChild(overlay)
      }
    });
  }
  // 点击弹框的搜索按钮执行搜索操作
  const modalSearchBtn = document.getElementById('modal-search-btn');
  modalSearchBtn.addEventListener('click', () => {
    // TODO: 执行搜索操作
    if (localStorage.getItem(key)) {
      render_search_result()
    } else {
      fetch('./search.json').then(res => {
        return res.json()
      }).then(res => {
        localStorage.setItem(key, JSON.stringify(res))
        render_search_result()
      })
    }

  });
  function render_search_result() {
    let searchData = JSON.parse(localStorage.getItem(key))
    let result = searchData.filter(item => item.main_title.includes(search_input.value))
    let href = location.href.split('/')
    let prefix = ''
    if (href.some(item => ['one', 'two', 'three'].includes(item)))
      prefix = '../'
    search_result.innerHTML =
      result.map(item =>
        `
          <a href="./${item.html_url ? item.html_url : item.id}.html">
            <img src="${prefix}${item.picture}" alt="">
              ${item.main_title}
          </a>
        `
      ).join('')
  }

}
