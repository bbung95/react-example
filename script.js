const tabList = document.querySelectorAll(".nav .tab");
const main = document.querySelector(".main");

const contents = {
    mail: "메일 영역",
    cafe: "카페 영역",
    blog: "블로그 영역",
};

tabList.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.dataset.tab);
        main.classList = `main ${item.dataset.tab}`;
        main.textContent = contents[item.dataset.tab];
    });
});
