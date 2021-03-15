import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";

export default class AwareMediaLibraryPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add("awareMediaLibrary", (locale) => {
			const view = new ButtonView(locale);

			view.set({
				label: "Öppna mediabiblioteket",
				icon: imageIcon,
				tooltip: true,
			});

			view.on("execute", () => {
				window.dispatchEvent(new Event("aware-media-library"));
			});

			return view;
		});
	}
}
