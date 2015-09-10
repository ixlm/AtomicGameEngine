
import EditorEvents = require("editor/EditorEvents");
import EditorUI = require("ui/EditorUI");
import ModalWindow = require("../ModalWindow");
import ProgressModal = require("../ProgressModal");

class Pro3DWindow extends ModalWindow {

    constructor() {

        super(false);

        this.init("3D Module License Required", "AtomicEditor/editor/ui/infomodule3d.tb.txt");

    }

    handleWidgetEvent(ev: Atomic.UIWidgetEvent) {

        if (ev.type == Atomic.UI_EVENT_TYPE_CLICK) {

            var id = ev.target.id;

            if (id == 'purchase') {

                Atomic.fileSystem.systemOpen("https://store.atomicgameengine.com/site");

            } else if (id == "ok") {

                this.hide();

                return true;
            }

            return false;

        }
    }

}

export = Pro3DWindow;