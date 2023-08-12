let fetchRMPost = async ()=>{

    try {

        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/read-more.json");

        let jsonOut = await res.json();

        let output = await jsonOut.map(elem => {
            
            if(elem.side === "right"){

                return `
                <div class="rm-right">

                    <h2 class="rm-header-title">
                        ${elem.headerTitle}
                    </h2>

                    <p class="rm-header-description">
                        ${elem.headeDescription}
                    </p>
                </div>`

            }else if(elem.side === "left"){

                return `
                <div class="rm-left">
                    <table class="table-box">
                        <tbody>
                            <tr class="rm-table-top">
                                <td class="rm-td-right">
                                    <div class="rm-td-content-wrapper">

                                        <div class="verified-icon-wrapper">
                                        </div>

                                        <div class="rm-table-title">
                                            ${elem.tdRTSideTitle}
                                        </div>
                                    </div>
                                    <div class="rm-table-description">
                                        ${elem.tdRTSideDescription}
                                    </div>
                                </td>

                                <td class="rm-td-left">
                                    <div class="rm-td-content-wrapper">

                                        <div class="splite-icon-wrapper">
                                        </div>

                                        <div class="rm-table-title">
                                            ${elem.tdLTSideTitle}
                                        </div>
                                    </div>
                                    <div class="rm-table-description">
                                        ${elem.tdLTSideDescription}
                                    </div>
                                </td>

                            </tr>

                            <tr class="rm-table-bottom">
                                <td class="rm-td-right">
                                    <div class="rm-td-content-wrapper">

                                        <div class="support-icon-wrapper">
                                        </div>

                                        <div class="rm-table-title">
                                            ${elem.tdRBSideTitle}
                                        </div>
                                    </div>
                                    <div class="rm-table-description">
                                        ${elem.tdRBSideDescription}
                                    </div>
                                </td>

                                <td class="rm-td-left">
                                    <div class="rm-td-content-wrapper">

                                        <div class="support-icon-wrapper">
                                        </div>

                                        <div class="rm-table-title">
                                            ${elem.tdLBSideTitle}
                                        </div>
                                    </div>
                                    <div class="rm-table-description">
                                        ${elem.tdLBSideDescription}
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>`

            }

        }).join("");

        document.querySelector("section.read-more").innerHTML = output;

    } catch (error) {

        throw error;

    }
}

export default {fetchRMPost}