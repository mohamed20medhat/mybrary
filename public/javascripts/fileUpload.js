FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
);

FilePond.setOptions({
    //the same as the aspect ratio of the image that we set when we made it pull it from the database in the books route -> books/index.ejs
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,
});

FilePond.parse(document.body);
