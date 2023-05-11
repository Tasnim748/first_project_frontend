import { Offcanvas } from "react-bootstrap";
import './Drawer.css';

function Drawer({ show, handleIt, studio }) {
    return (
        <Offcanvas show={show} onHide={handleIt} placement="bottom" style={{height: '70%', borderRadius: '30px 30px 0 0', background: 'rgba(255, 255, 255, 0.756)', backdropFilter: 'blur(5px)'}}>
            <Offcanvas.Body>
                <div style={{textAlign: 'center', padding: '2%'}}>
                    <img src="./images/UCB-Lounge.jpeg" width='99%' alt="" style={{borderRadius: '20px'}} />
                </div>
                
                <div style={{padding: '4%'}}>
                    <h3>{studio}</h3>
                    <p style={{lineHeight: '130%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum iusto in delectus cumque eum consequuntur maiores maxime exercitationem velit nulla sapiente magni repellat est, doloribus culpa, ipsum mollitia aperiam!</p>
                </div>

                <div style={{paddingTop: '6%'}}>
                    <svg width="198" height="25" viewBox="0 0 198 25" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleIt}>
                    <path d="M39.8828 11.1172L39.8828 15.7031L41.75 15.7031C42.6667 15.7031 43.3203 15.5443 43.7109 15.2266C44.1016 14.9036 44.2969 14.375 44.2969 13.6406C44.2969 12.6719 44.0911 12.0104 43.6797 11.6563C43.2682 11.2969 42.625 11.1172 41.75 11.1172L39.8828 11.1172ZM39.8828 6.63281L39.8828 9.83594L41.7187 9.83594C42.4792 9.83594 43.0286 9.6901 43.3672 9.39844C43.7109 9.10677 43.8828 8.73958 43.8828 8.29688C43.8828 7.70833 43.7135 7.28385 43.375 7.02344C43.0417 6.76302 42.4896 6.63281 41.7187 6.63281L39.8828 6.63281ZM38.2969 5.33594L41.75 5.33594C42.9427 5.33594 43.862 5.59375 44.5078 6.10938C45.1536 6.625 45.4766 7.35417 45.4766 8.29688C45.4766 8.80208 45.3047 9.26042 44.9609 9.67188C44.6224 10.0833 44.112 10.3411 43.4297 10.4453C44.1953 10.5599 44.7943 10.888 45.2266 11.4297C45.6641 11.9661 45.8828 12.7552 45.8828 13.7969C45.8828 14.8542 45.5365 15.6536 44.8437 16.1953C44.151 16.7318 43.1198 17 41.75 17L38.2969 17L38.2969 5.33594ZM52.125 12.6016L51.6484 12.6016C50.8099 12.6016 50.1771 12.75 49.75 13.0469C49.3281 13.3385 49.1172 13.776 49.1172 14.3594C49.1172 14.8854 49.276 15.2943 49.5937 15.5859C49.9115 15.8776 50.3516 16.0234 50.9141 16.0234C51.7057 16.0234 52.3281 15.75 52.7812 15.2031C53.2344 14.651 53.4635 13.8906 53.4687 12.9219L53.4687 12.6016L52.125 12.6016ZM54.9141 12.0078L54.9141 17L53.4687 17L53.4687 15.7031C53.1615 16.224 52.7734 16.6094 52.3047 16.8594C51.8411 17.1042 51.276 17.2266 50.6094 17.2266C49.7187 17.2266 49.0078 16.9766 48.4766 16.4766C47.9453 15.9714 47.6797 15.2969 47.6797 14.4531C47.6797 13.4792 48.0052 12.7396 48.6562 12.2344C49.3125 11.7292 50.2734 11.4766 51.5391 11.4766L53.4687 11.4766L53.4687 11.25C53.4635 10.5521 53.2865 10.0469 52.9375 9.73438C52.5885 9.41667 52.0312 9.25781 51.2656 9.25781C50.776 9.25781 50.2812 9.32813 49.7812 9.46875C49.2812 9.60938 48.7943 9.8151 48.3203 10.0859L48.3203 8.64844C48.8516 8.44531 49.3594 8.29427 49.8437 8.19531C50.3333 8.09115 50.8073 8.03906 51.2656 8.03906C51.9896 8.03906 52.6068 8.14583 53.1172 8.35938C53.6328 8.57292 54.0495 8.89323 54.3672 9.32031C54.5651 9.58073 54.7057 9.90365 54.7891 10.2891C54.8724 10.6693 54.9141 11.2422 54.9141 12.0078ZM64.5703 16.5547C64.1849 16.7786 63.7865 16.9453 63.375 17.0547C62.9687 17.1693 62.5521 17.2266 62.125 17.2266C60.7708 17.2266 59.7109 16.8203 58.9453 16.0078C58.1849 15.1953 57.8047 14.0703 57.8047 12.6328C57.8047 11.1953 58.1849 10.0703 58.9453 9.25781C59.7109 8.44531 60.7708 8.03906 62.125 8.03906C62.5469 8.03906 62.9583 8.09375 63.3594 8.20313C63.7604 8.3125 64.1641 8.48177 64.5703 8.71094L64.5703 10.2188C64.1901 9.88021 63.8073 9.63542 63.4219 9.48438C63.0417 9.33333 62.6094 9.25781 62.125 9.25781C61.224 9.25781 60.5312 9.54948 60.0469 10.1328C59.5625 10.7161 59.3203 11.5495 59.3203 12.6328C59.3203 13.7109 59.5625 14.5443 60.0469 15.1328C60.5365 15.7161 61.2292 16.0078 62.125 16.0078C62.625 16.0078 63.0729 15.9323 63.4687 15.7813C63.8646 15.625 64.2318 15.3854 64.5703 15.0625L64.5703 16.5547ZM67.7656 4.84375L69.25 4.84375L69.25 11.8828L73.0234 8.25L74.7734 8.25L71.3281 11.5469L75.3125 17L73.5547 17L70.3203 12.4844L69.25 13.4922L69.25 17L67.7656 17L67.7656 4.84375ZM90 5.76563L90 8.25L93.2656 8.25L93.2656 9.36719L90 9.36719L90 14.1172C90 14.763 90.1224 15.2135 90.3672 15.4688C90.612 15.724 91.0391 15.8516 91.6484 15.8516L93.2656 15.8516L93.2656 17L91.5078 17C90.4297 17 89.6693 16.7839 89.2266 16.3516C88.7839 15.9193 88.5625 15.1745 88.5625 14.1172L88.5625 9.36719L86.2266 9.36719L86.2266 8.25L88.5625 8.25L88.5625 5.76563L90 5.76563ZM99.6562 9.25782C98.9271 9.25782 98.375 9.54167 98 10.1094C97.625 10.6771 97.4375 11.5182 97.4375 12.6328C97.4375 13.7422 97.625 14.5833 98 15.1563C98.375 15.724 98.9271 16.0078 99.6562 16.0078C100.391 16.0078 100.945 15.724 101.32 15.1563C101.695 14.5833 101.883 13.7422 101.883 12.6328C101.883 11.5182 101.695 10.6771 101.32 10.1094C100.945 9.54167 100.391 9.25782 99.6562 9.25782ZM99.6562 8.03907C100.87 8.03907 101.797 8.4323 102.437 9.21875C103.083 10.0052 103.406 11.1432 103.406 12.6328C103.406 14.1276 103.086 15.2682 102.445 16.0547C101.805 16.8359 100.875 17.2266 99.6562 17.2266C98.4427 17.2266 97.5156 16.8359 96.875 16.0547C96.2344 15.2682 95.9141 14.1276 95.9141 12.6328C95.9141 11.1432 96.2344 10.0052 96.875 9.21875C97.5156 8.4323 98.4427 8.03907 99.6562 8.03907ZM122.031 5.73438L122.031 7.33594C121.552 7.02865 121.07 6.79688 120.586 6.64063C120.107 6.48438 119.622 6.40625 119.133 6.40625C118.388 6.40625 117.799 6.58073 117.367 6.92969C116.935 7.27344 116.719 7.73959 116.719 8.32813C116.719 8.84375 116.859 9.23698 117.141 9.50782C117.427 9.77865 117.958 10.0052 118.734 10.1875L119.562 10.375C120.656 10.6302 121.453 11.0313 121.953 11.5781C122.453 12.125 122.703 12.8698 122.703 13.8125C122.703 14.9219 122.359 15.7682 121.672 16.3516C120.984 16.9349 119.984 17.2266 118.672 17.2266C118.125 17.2266 117.576 17.1667 117.023 17.0469C116.471 16.9323 115.917 16.7578 115.359 16.5234L115.359 14.8438C115.958 15.224 116.523 15.5026 117.055 15.6797C117.591 15.8568 118.13 15.9453 118.672 15.9453C119.469 15.9453 120.089 15.7682 120.531 15.4141C120.974 15.0547 121.195 14.5547 121.195 13.9141C121.195 13.3307 121.042 12.8854 120.734 12.5781C120.432 12.2708 119.904 12.0339 119.148 11.8672L118.305 11.6719C117.221 11.4271 116.435 11.0573 115.945 10.5625C115.456 10.0677 115.211 9.40365 115.211 8.57032C115.211 7.52865 115.56 6.69532 116.258 6.07032C116.961 5.44011 117.893 5.125 119.055 5.125C119.503 5.125 119.974 5.17709 120.469 5.28125C120.964 5.38021 121.484 5.53125 122.031 5.73438ZM128.562 5.76563L128.562 8.25001L131.828 8.25001L131.828 9.36719L128.562 9.36719L128.562 14.1172C128.562 14.763 128.685 15.2135 128.93 15.4688C129.174 15.724 129.602 15.8516 130.211 15.8516L131.828 15.8516L131.828 17L130.07 17C128.992 17 128.232 16.7839 127.789 16.3516C127.346 15.9193 127.125 15.1745 127.125 14.1172L127.125 9.36719L124.789 9.36719L124.789 8.25L127.125 8.25001L127.125 5.76563L128.562 5.76563ZM134.93 13.6875L134.93 8.26563L136.367 8.26563L136.367 13.6875C136.367 14.474 136.505 15.0521 136.781 15.4219C137.062 15.7917 137.495 15.9766 138.078 15.9766C138.755 15.9766 139.273 15.7396 139.633 15.2656C139.992 14.7865 140.172 14.1016 140.172 13.2109L140.172 8.26563L141.617 8.26563L141.617 17L140.172 17L140.172 15.6875C139.917 16.1927 139.568 16.5755 139.125 16.8359C138.687 17.0964 138.174 17.2266 137.586 17.2266C136.69 17.2266 136.023 16.9349 135.586 16.3516C135.148 15.763 134.93 14.875 134.93 13.6875ZM149.75 9.36719L149.75 4.84376L151.187 4.84376L151.187 17L149.75 17L149.75 15.8984C149.51 16.3307 149.19 16.6615 148.789 16.8906C148.393 17.1146 147.935 17.2266 147.414 17.2266C146.357 17.2266 145.523 16.8177 144.914 16C144.31 15.1771 144.008 14.0443 144.008 12.6016C144.008 11.1797 144.312 10.0651 144.922 9.25782C145.531 8.44532 146.362 8.03907 147.414 8.03907C147.94 8.03907 148.404 8.15365 148.805 8.38282C149.206 8.60678 149.521 8.9349 149.75 9.36719ZM145.523 12.6328C145.523 13.7474 145.701 14.5885 146.055 15.1563C146.409 15.724 146.932 16.0078 147.625 16.0078C148.318 16.0078 148.844 15.7214 149.203 15.1484C149.568 14.5755 149.75 13.737 149.75 12.6328C149.75 11.5234 149.568 10.6849 149.203 10.1172C148.844 9.54428 148.318 9.25782 147.625 9.25782C146.932 9.25782 146.409 9.54167 146.055 10.1094C145.701 10.6771 145.523 11.5182 145.523 12.6328ZM155.156 8.28126L158.836 8.28126L158.836 15.8828L161.687 15.8828L161.687 17L154.547 17L154.547 15.8828L157.398 15.8828L157.398 9.39844L155.156 9.39844L155.156 8.28126ZM157.398 4.88282L158.836 4.88282L158.836 6.69532L157.398 6.69532L157.398 4.88282ZM167.141 9.25782C166.411 9.25782 165.859 9.54167 165.484 10.1094C165.109 10.6771 164.922 11.5182 164.922 12.6328C164.922 13.7422 165.109 14.5833 165.484 15.1563C165.859 15.724 166.411 16.0078 167.141 16.0078C167.875 16.0078 168.43 15.724 168.805 15.1563C169.18 14.5833 169.367 13.7422 169.367 12.6328C169.367 11.5182 169.18 10.6771 168.805 10.1094C168.43 9.54167 167.875 9.25782 167.141 9.25782ZM167.141 8.03907C168.354 8.03907 169.281 8.4323 169.922 9.21876C170.568 10.0052 170.891 11.1432 170.891 12.6328C170.891 14.1276 170.57 15.2682 169.93 16.0547C169.289 16.8359 168.359 17.2266 167.141 17.2266C165.927 17.2266 165 16.8359 164.359 16.0547C163.719 15.2682 163.398 14.1276 163.398 12.6328C163.398 11.1432 163.719 10.0052 164.359 9.21876C165 8.4323 165.927 8.03907 167.141 8.03907Z" fill="black"/>
                    <rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="black"/>
                    <path d="M4 10L12.5 16L21 10" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Drawer;