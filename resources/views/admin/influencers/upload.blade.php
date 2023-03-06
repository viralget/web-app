
<h3>Upload Influencers CSV</h3>
<form action="{{ route('admin.influencers.upload.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file" accept="csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    <button>Upload and import</button>
</form>