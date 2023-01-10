import Swal from "sweetalert2";

class PopupService {
  /**
   * @param title
   * @param {object} options
   */
  fire(title, options = {}) {
    return Swal.fire({
      title,
      width: 600,
      padding: "3em",
      confirmButtonText: `Ok`,
      background: "#fff url(/images/trees.png)",
      backdrop: `
              rgba(0,0,123,0.4)
              url("https://c.tenor.com/5P2BiFhQVEsAAAAi/don%27t-know-confusing.gif")
              right bottom
              no-repeat
            `,
      ...options,
    });
  }
}

const popupService = new PopupService();
export default popupService;
