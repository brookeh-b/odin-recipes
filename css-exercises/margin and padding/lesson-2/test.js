// def scan_new_or_incomplete_registrations
// newly_created_registrations_or_incomplete_registrations.each do |screening|
//   ServiceHelpers::SdnScreenService.new({
//     screening: find_or_create_initial_screening_record(screening),
//     is_quarterly_scan: false
//   }).run!
// end
// end

let scan_new_or_incomplete_registrations = () => {
    let array = newly_created_registrations_or_incomplete_registrations;
    array.forEach(screening => {
        ServiceHelpers.SdnScreenService.new({
            screening: find_or_create_initial_screening_record(screening),
            is_quarterly_scan: false
        });
    })
}