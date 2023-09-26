class RemoveDateRangeFromEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :date_range, :datetime
  end
end
